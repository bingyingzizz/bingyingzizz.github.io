# NBV 函数的导数与测度的关系　`prop.nbv-derivative`
命题：$\mu_F \perp m \iff F' = 0 \text{a.e.}$；$\mu_F \ll m \iff F(x) = \int_{-\infty}^{x} F'$
layer 19 · 命题 · 有界变差与绝对连续 · 分析学

设 $F \in NBV$。则 $F' \in L^1(m)$，并且

$$\mu_F \perp  m \iff F' = 0\quad  \text{a.e.}$$
$$\mu_F \ll  m \iff F(x) = \int_{-\infty}^{x} F'(t) dt$$

## 为什么成立（入边，证明在 proofs/）
- `def.nbv` NBV：用到了定义 NBV　proofs/def-link.nbv-derivative.md
- `def.mutually-singular` 相互奇异：用到了定义 相互奇异　proofs/def-link.mutually-singular-nbv-derivative.md
- `def.absolute-continuity` 绝对连续：用到了定义 绝对连续　proofs/def-link.ac-nbv-derivative.md
- `def.rn-derivative` RN 导数与 Lebesgue 分解：用到了定义 RN 导数与 Lebesgue 分解　proofs/def-link.rn-derivative-nbv-derivative.md
- `def.integrable` 可积 / L¹：用到了定义 可积 / L¹　proofs/def-link.integrable-nbv-derivative.md

## 它能推出什么 / 谁在用它
- …另有出边，续页见 `nodes/prop.nbv-derivative.2.md`

refs: Folland, Real Analysis, Theorem 3.35

> 说明见 `notes/prop.nbv-derivative.md`
