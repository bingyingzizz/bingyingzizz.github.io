# 绝对连续与变差　`prop.ac-and-variations`
命题：$\nu \ll \mu \iff |\nu| \ll \mu \iff \nu^{+}$、$\nu^{-} \ll \mu$；$\nu \perp \mu$ 且 $\nu \ll \mu \implies \nu = 0$
layer 19 · 命题 · 符号测度与分解 · 分析学

设 $\mu$ 是测度，$\nu$ 是符号测度。则

$$\nu \ll  \mu \iff |\nu| \ll  \mu \iff \nu^+ \ll  \mu\text{ 且} \nu^- \ll  \mu$$

并且：若同时有 $\nu \perp  \mu$ 与 $\nu \ll  \mu$，则 $\nu = 0$。

## 为什么成立（入边，证明在 proofs/）
- `thm.jordan-decomposition` Jordan 分解定理：用到了定义 Jordan 分解定理　proofs/def-link.variations-ac.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理

refs: Folland, Real Analysis, Prop. 3.5

> 说明见 `notes/prop.ac-and-variations.md`
