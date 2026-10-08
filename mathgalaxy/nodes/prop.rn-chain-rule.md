# RN 导数的链式法则　`prop.rn-chain-rule`
命题：RN 导数的换元公式与链式法则
layer 20 · 命题 · 符号测度与分解 · 分析学

设 $\nu$ 是 $\sigma$有限符号测度、$\mu$ 与 $\lambda$ 是 $\sigma$有限测度，且

$$\nu \ll  \mu, \quad  \mu \ll  \lambda$$

**(a)** 若 $g \in L^1(\nu)$，则 $g \frac{d\nu}{d\mu} \in L^1(\mu)$，且

$$\int g d\nu = \int g \frac{d\nu}{d\mu} d\mu$$

**(b)** 此时 $\nu \ll  \lambda$，且**链式法则**成立：
> 陈述续见 `nodes/prop.rn-chain-rule.2.md`


## 为什么成立（入边，证明在 proofs/）
- `prop.integral-gives-ac` 积分给出绝对连续测度 + `prop.integrals-equal-iff` 何时两个函数积分处处相同：换元公式与链式法则　proofs/imp.rn-chain-rule.md

refs: Folland, Real Analysis, Theorem 3.9

> 说明见 `notes/prop.rn-chain-rule.md`
