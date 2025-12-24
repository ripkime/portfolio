import type { Component } from "svelte";

import GolangIcon from "$lib/components/icons/golang.svelte";
import SvelteIcon from "$lib/components/icons/svelte.svelte";
import FlutterIcon from "$lib/components/icons/flutter.svelte";
import LubuntuIcon from "$lib/components/icons/lubuntu.svelte";
import PostgreIcon from "$lib/components/icons/postgre.svelte";
import GitIcon from "$lib/components/icons/git.svelte";





type MainStack = {
    title: string;
    subtitle: string;
    color: string;
    icon: Component;
}

type SupportStack = {
    title: string;
    color: string;
    icon: Component;
}

type TechStackData = {
    mainStack: MainStack[];
    supportStack: SupportStack[]

}

export const tech_stack: TechStackData[] = [{
    mainStack: [
        {
            title: 'Golang',
            subtitle: 'For Building High-performance Backend',
            color: 'blue',
            icon: GolangIcon,
        },
        {
            title: 'Svelte',
            subtitle: 'Make Reactive Interfaces',
            color: 'orange',
            icon: SvelteIcon,
        }
    ],
    supportStack: [
        {
            title: 'PostgreSQL',
            color: 'teal',
            icon: PostgreIcon
        },
        {
            title: 'Flutter',
            color: 'sky',
            icon: FlutterIcon
        },
        {
            title: 'Lubuntu',
            color: 'blue',
            icon: LubuntuIcon
        },
        {
            title: 'Git',
            color: 'red',
            icon: GitIcon
        },
    ]

}];