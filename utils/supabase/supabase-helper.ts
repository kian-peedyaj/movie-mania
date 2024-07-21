import { SupabaseClient } from "@supabase/supabase-js";
import { createClient as createClientForCSR } from "./client";
import { createClient as createClientForSSR } from "./server";

export default class supaHelper {
  supabaseClient: SupabaseClient;
  constructor(isFromServer: boolean = true) {
    if (isFromServer) {
      this.supabaseClient = createClientForSSR();
    } else {
      this.supabaseClient = createClientForCSR();
    }
  }
  async getUser() {
    const {
      data: { user },
    } = await this.supabaseClient.auth.getUser();
    return user;
  }
  async signIn(email: string, password: string) {
    const { error } = await this.supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    return error;
  }
  async signOut() {
    return await this.supabaseClient.auth.signOut();
  }
}
