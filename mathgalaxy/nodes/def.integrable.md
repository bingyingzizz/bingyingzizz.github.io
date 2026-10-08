# 可积 / L¹　`def.integrable`
可积函数与 $L^{1}$ 空间
layer 18 · 定义 · 积分 · 分析学

实值可测 $f$ **可积**，当且仅当 $\int f^+ < \infty$ 且 $\int f^- < \infty$。等价地：

$$f\text{ 可积} \iff \int |f| d\mu < \infty$$

复值可测 $f$ 可积，当且仅当 $\int |f| d\mu < \infty$。可积函数全体记作

$$L^1(\mu) = L^1(X, \mathcal{M}, \mu) = L^1(X, \mu)$$

## 为什么成立（入边，证明在 proofs/）
- `def.lplus` L⁺：用到了定义 L⁺　proofs/def-link.lplus-integrable.md
- `def.quotient-set` 商集与等价类：用到了定义 商集与等价类　proofs/dep.quotient-integrable.md
- `def.integral-nonneg` 非负函数的积分：用到了定义 非负函数的积分　proofs/def-dep.nonneg-integral-integrable.md
- `def.integral-complex` 复函数的积分：用到了定义 复函数的积分　proofs/def-dep.integral-complex-integrable.md

## 它能推出什么 / 谁在用它
- 被 `thm.dct` 控制收敛定理 用

- …另有出边，续页见 `nodes/def.integrable.2.md`

refs: Folland, Real Analysis, §2.3

> 说明见 `notes/def.integrable.md`
