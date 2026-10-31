# 天际线层的定义 $\implies$ 它的茎
`imp.skyscraper-stalks` · 推出 · strong 边 · 根 `../`

`def.skyscraper-sheaf` 天际线层 → `prop.skyscraper-stalks` 天际线层的茎

**第一步：写清截面。** 由定义，$(i_{x,*}A)(U)$ 在 $x \in U$ 时是 $A$、否则是 $0$；限制映射在 $x \in U \subseteq V$ 时是 $\mathrm{id}_{A}$、其余是零。

**第二步：取茎。** 茎是沿 $y$ 的开邻域取滤过余极限：

$$(i_{x,*}A)_{y} = \varinjlim_{U \ni y}\ (i_{x,*}A)(U) .$$

**第三步：$y \in \overline{\{x\}}$ 的情形。** 闭包的刻画给出：每个开邻域 $U \ni y$ 都满足 $U \cap \{x\} \ne \emptyset$，即 $x \in U$。于是这个滤过系统里**每一项**都是 $A$，而相邻两个邻域之间的过渡映射都是 $\mathrm{id}_{A}$ —— 常图（constant diagram）的余极限就是 $A$。

> 续见 proofs/imp.skyscraper-stalks.2.md
