<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import NavLink from '$lib/components/NavLink.svelte';

	export let navItems: any[] = [];

  let nav: HTMLUListElement;
  let showNav: boolean = false;

  const toggleNav = () => {
    showNav = !showNav;
  }

</script>

<ul class="horizontal-nav">
	{#each navItems as { label, href }}
		<li>
			<NavLink {href} {label} size="small" />
		</li>
	{/each}
</ul>

<div class="overflow-nav">
  <div class="button-bar">
    <Button label="☰" onClick={toggleNav} />
  </div>
  <ul bind:this={nav}
    class:show-nav={showNav}
    class:hide-nav={!showNav}>
    {#each navItems as { label, href }}
      <li>
        <NavLink {href} {label} size='small'/> 
      </li>
    {/each}
  </ul>
</div>

<style>

  @media (max-width: 600px) {
    .horizontal-nav {
      display: none;
    }
    .overflow-nav {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: right;
      gap: 1rem;
      padding: 1rem;
    }

    .button-bar {
      display: flex;
      justify-content: flex-end;
      margin: 0;
      padding: 0;
    }

    .show-nav {
      display: block;
    }

    .hide-nav {
      display: none;
    }

    .overflow-nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .overflow-nav li {
      list-style: none;
    }
  }

	@media (min-width: 600px) {
    .overflow-nav {
      display: none;
    }
		.horizontal-nav {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			gap: 1rem;
			padding: 1rem;
		}

		.horizontal-nav li {
			list-style: none;
		}
	}
</style>
