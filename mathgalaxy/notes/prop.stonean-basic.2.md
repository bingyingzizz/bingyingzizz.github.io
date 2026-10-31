# 极端不连通的基本性质　`prop.stonean-basic`　·　说明
根 `../`

**把 (a) 写严。** 设 $U, V$ 不交开。令 $W := X\setminus \overline{V}$ —— 它开，且 $U\subseteq W$。
因为 $U\subseteq W = W^{\circ}$，取闭包得 $\overline U\subseteq\overline{W^{\circ}}$；而**极端不连通的等价刻画**是「任意开集的闭包开」，即 $\overline{W^{\circ}}$ 是开的，于是 $\overline{W^{\circ}} = W^{\circ}$，所以 $\overline U \subseteq W^{\circ} = W = X\setminus\overline V$，即 $\overline U\cap\overline V = \emptyset$ ✓。∎
（等价说法：极端不连通 $\iff$ 不交开集的闭包不交。）
**(b) 写严**：由 (a)，Hausdorff 性给出的分离开集 $U\ni x$、$V\ni y$ 满足 $\overline U\cap\overline V = \emptyset$；而 $\overline U$、$\overline V$ 都是**闭开**的（极端不连通），于是它们构成 $x$ 与 $y$ 之间的一个开闭分隔：$x$ 的连通分量含于 $\overline U$，故不含 $y$ ✓。于是每个连通分量是单点，即全不连通。∎
