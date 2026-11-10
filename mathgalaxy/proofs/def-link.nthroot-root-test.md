# n 次方根的存在唯一性 $\implies$ 根值判别法的表达式有定义
`def-link.nthroot-root-test` · 推出 · strong 边 · 根 `../`

`thm.nth-root` n 次方根 → `thm.root-test` 根值判别法

根值判别法要对**每个** $n$ 与每个 $a_n \ge 0$ 写出 $\sqrt[n]{a_n}$：一般 $n$ 的非负 $n$ 次方根**存在且唯一**正是 `thm.nth-root` 的内容。唯一性保证 $\sqrt[n]{a_n}$ 是良定义的单个实数，$\limsup_{n}\sqrt[n]{a_n}$ 才有意义。判别法的证明本身只是把它与几何级数比较（见边 `thm.comparison-test \implies thm.root-test`），不另用方根的性质 —— 所以这条依赖是「表达式良定义」的前置定理，不是追图里的一步。

> AUD-061 A 类。原记 definition；改 imp 的理由：来源是定理、且整条判别法的陈述以它为前提（不是定义性记号）。
