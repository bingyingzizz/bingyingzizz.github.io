# (L^p)* ≅ L^q　`thm.riesz-representation-lp`
定理（Riesz 表示）：$1 < p < \infty$ 时 $(L^p)^{*} \cong L^q$
layer 21 · 定理 · L^p 空间 · 分析学

设 $1 < p < \infty$，$q$ 是共轭指数。则对每个 $\Phi \in (L^p)^*$，存在**唯一**（a.e.）的 $g \in L^q$ 使

$$
\Phi(f) = \int f g \, d\mu \qquad \forall f \in L^p
$$

于是映射 $g \mapsto \varphi_g$ 是 $L^q$ 到 $(L^p)^*$ 的**等距同构**：

$$(L^p)^* \cong L^q$$
> 陈述续见 `nodes/thm.riesz-representation-lp.2.md`


## 为什么成立（入边，证明在 proofs/）
- `prop.bounded-functional-gives-lq` 有界 ⟹ g ∈ L^q + `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理 + `prop.duality-isometry` ‖g‖_q = ‖φ_g‖：把泛函变成测度 $\implies$ $(L^p)^* \cong L^q$　proofs/imp.riesz-lp.md
- `def.conjugate-exponents` 共轭指数：用到了定义 共轭指数　proofs/def-link.conjugate-riesz.md
- `def.duality-map` 对偶配对 φ_g：用到了定义 对偶配对 φ_g　proofs/def-link.duality-riesz.md

refs: Folland, Real Analysis, Theorem 6.15

> 说明见 `notes/thm.riesz-representation-lp.md`
