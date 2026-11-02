# 极端不连通的基本性质　`prop.stonean-basic`　·　说明
根 `../`

**(a)** 反证：若 $\overline{U} \cap \overline{V}$ 非空，取其中的点 $x$。

因为 $X$ 极端不连通，$\overline{U}$ 与 $\overline{V}$ 都是闭开的，于是它们与自己的内部的关系逼出矛盾 —— 具体地说，$x$ 的每个邻域都要同时碰到 $U$ 与 $V$，而这两个闭开集又把 $x$ 与「另一个」隔开。

**(b)** 设 $x \ne y$。Hausdorff 性给出分离它们的开集 $U \ni x$、$V \ni y$，由 (a) 得两个不交的闭开集把 $x$ 与 $y$ 隔开，于是 $C(x) \subseteq U \not\ni y$，$y \notin C(x)$。所以每个连通分量是单点。

**把 (a) 写严。** 设 $U, V$ 不交开。令 $W := X\setminus \overline{V}$ —— 它开，且 $U\subseteq W$。
因为 $U\subseteq W = W^{\circ}$，取闭包得 $\overline U\subseteq\overline{W^{\circ}}$；而**极端不连通的等价刻画**是「任意开集的闭包开」，即 $\overline{W^{\circ}}$ 是开的，于是 $\overline{W^{\circ}} = W^{\circ}$，所以 $\overline U \subseteq W^{\circ} = W = X\setminus\overline V$，即 $\overline U\cap\overline V = \emptyset$ ✓。

> 续见 notes/prop.stonean-basic.2.md
