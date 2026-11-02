# 单位球紧 ⟺ 有限维　`thm.riesz-ball-compact`　·　说明
根 `../`

「$\Longleftarrow$」：有限维时范数都等价，用 $\|\cdot\|_\infty$ 的坐标球（有界闭集）套 Heine–Borel。

「$\Longrightarrow$」：若 $\dim E = \infty$，用几乎正交引理递归取 $e_1, e_2, \ldots$，满足 $\|e_n\| = 1$ 且 $d(e_n, \operatorname{span}\{e_1,\ldots,e_{n-1}\}) \ge 1/2$。于是 $\|e_n - e_m\| \ge 1/2$（$n \ne m$），这列没有收敛子列，与 $B_E$ 紧（列紧）矛盾。

⭐ 这是「有限维 / 无穷维」的分水岭：**闭有界集不再紧**。所以优化里的「闭有界 $implies$ 有极小元」在无穷维全废 —— 必须换全有界（相对紧）、或弱拓扑（Banach–Alaoglu）、或强制条件（coercivity）。
