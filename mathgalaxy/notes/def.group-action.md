# 群作用　`def.group-action`　·　说明
根 `../`

⭐ **等价说法（全团的技巧都从这里来）**：一个作用等价于一个群同态 $\rho : G \to \operatorname{Sym}(X)$，$\rho(g)(x) := g \cdot x$。理由是两条作用公理恰好就是「$\rho$ 保单位元、保乘法」。于是「群在集合上作用」= 「$G$ 的一个置换表示」，而 `thm.first-iso` 立刻给出 $G/\ker\rho \hookrightarrow \operatorname{Sym}(X)$。

⭐ 轨道构成 $X$ 的**划分**：$x \in Gx$（自反）、$y \in Gx \implies Gy = Gx$（对称与传递）。所以 $X = \bigsqcup_{\text{轨道}} \text{轨道}$ —— 数轨道的大小就等于数这个划分。

⭐ 三个必会的例子：
- **自然作用**：$S_n$ 在 $\{1, \ldots, n\}$ 上，轨道只有一个（传递作用）；
- **左乘（正则）作用**：$G$ 在自身上的 $g \cdot h := gh$，轨道只有一个，稳定子全平凡（**自由**作用）—— 这是 Cayley 定理的入口；
- **共轭作用**：$g \cdot x := gxg^{-1}$，轨道 = 共轭类，稳定子 = 中心化子 —— 这是类方程的入口。

> 续见 notes/def.group-action.2.md
