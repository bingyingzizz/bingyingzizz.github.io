# Baire 纲定理　`thm.baire`　·　说明
根 `../`

证法（球套法）：设 $O_n$ 稠密开。任给 $x, \varepsilon$，$B(x, \varepsilon) \cap O_1$ 是非空开，取 $x_1, \varepsilon_1 < \varepsilon$ 使 $\overline{B(x_1, \varepsilon_1)} \subseteq B(x, \varepsilon) \cap O_1$；归纳取 $\varepsilon_n < 1/n$ 且 $\overline{B(x_{n+1}, \varepsilon_{n+1})} \subseteq B(x_n, \varepsilon_n) \cap O_{n+1}$。嵌套闭球半径 $\to 0$ 且空间完备，故交非空；交中一点落在每个 $O_n$ 里，也落在 $B(x, \varepsilon)$ 里。

⭐ 三种等价写法都要会用，转换只需取补集。

⚠️ 完备性不能去掉：$\mathbb{Q}$ 上每个单点闭且无处稠密，$\mathbb{Q}$ 可数，故 $\mathbb{Q}$ 是第一纲 —— 它不是 Baire 空间。
