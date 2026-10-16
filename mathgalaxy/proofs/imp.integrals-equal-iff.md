# 积分为零 $\implies$ 用积分识别函数
`imp.integrals-equal-iff` · 推出 · strong 边 · 根 `../`

`prop.integral-zero-iff` 积分为零 ⟺ 几乎处处为零 → `prop.integrals-equal-iff` 何时两个函数积分处处相同

记 $h = f - g \in L^1$。三条之间的等价链条是

$$(i) \int_E f = \int_E g\quad  \forall E \in \mathcal{M}\quad  \iff\quad  \int_E h = 0\quad  \forall E$$

**$(i) \implies (ii)$**：分别取 $E = \{h \ge 0\}$ 与 $E = \{h < 0\}$。由 $\int_E h = 0$ 且 $h$ 在 $E$ 上不变号，得 $\{h > 0\}$ 与 $\{h < 0\}$ 都是零集（否则积分为正/负），故 $\mu(\{h \ne 0\}) = 0$，于是 $\int|h| = 0$。

**$(ii) \implies (iii)$**：$\int|h| = 0$ 配合「积分为零 $\iff$ 几乎处处为零」，直接得到 $h = 0 \text{a.e.}$。

**$(iii) \implies (i)$**：$h = 0 \text{a.e.}$ 时，对任意 $E$，$\int_E h$ 的简单函数逼近里可以整体避开零集，故积分为 0。∎
