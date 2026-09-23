# 绝对连续的 ε–δ 刻画　`thm.ac-epsilon-delta`
定理（有限情形）：$\nu \ll \mu \iff \forall\varepsilon>0 \exists\delta>0$ ( $\mu(E)<\delta \implies |\nu(E)|\le\varepsilon$ )
layer 16 · 定理 · 符号测度与分解 · 分析学

设 $\nu$ 是**有限**符号测度、$\mu$ 是测度。则

$$\nu \ll  \mu \iff \forall\varepsilon > 0, \exists\delta > 0 : \mu(E) < \delta \implies |\nu(E)| \le \varepsilon$$

## 为什么成立（入边，证明在 proofs/）
- `def.absolute-continuity` 绝对连续：绝对连续 $\implies \varepsilon$–$\delta$ 刻画（$\nu$ 有限时）　proofs/imp.ac-epsilon-delta.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.ac-iff-measure-ac` 函数绝对连续 ⟺ 测度绝对连续

refs: Folland, Real Analysis, Prop. 3.5

> 说明见 `notes/thm.ac-epsilon-delta.md`
