<script>
  import { islogin, mode } from './stores.js';
  import Login from './Login.svelte';
  import Logout from './Logout.svelte';
  import Menu from './Menu.svelte';
  import Displaysub from './Displaysub.svelte';
  import Askquota from './Askquota.svelte';
  import Asked from './Asked.svelte';
  import Admin from './Admin.svelte';
  import Quotaname from './Quotaname.svelte';
  import Adds from './Adds.svelte';
  import Profile from './Profile.svelte';
  import DisplaysubAdmin from './DisplaysubAdmin.svelte';
  import Forgot from './Forgot.svelte';
  import Statistic from './Statistic.svelte';
</script>
{#if !$islogin && !($mode == 'Forgot')}
  <Login/>

{:else if !$islogin && $mode == "Forgot"}
  <Forgot />
{:else}
    {#if $mode == 'menu'}
      <Menu />
    {:else if $mode == 'admin'}
      <Admin />    
    {:else if $mode == 'Displaysub'}
      <Displaysub />
    {:else if $mode == 'Askquota'}
      <Askquota />
    {:else if $mode == 'Asked'}
      <Asked />
    {:else if $mode == 'Quotaname'}
      <Quotaname />
    {:else if $mode == 'Adds'}
      <Adds />
    {:else if $mode == 'Profile'}
      <Profile />
    {:else if $mode == 'DisplaysubAdmin'}
      <DisplaysubAdmin />
    {:else if $mode == 'Statistic'}
      <Statistic />
    {/if}    
  <Logout />
{/if}
<style>

</style>