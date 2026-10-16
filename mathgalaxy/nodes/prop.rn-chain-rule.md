# RN 导数的链式法则　`prop.rn-chain-rule`
命题：RN 导数的换元公式与链式法则
layer 21 · 命题 · 符号测度与分解 · 分析学
[在星图里打开](../#n=prop.rn-chain-rule)　·　[节点索引](../index.md)

设 $\nu$ 是 $\sigma$有限符号测度、$\mu$ 与 $\lambda$ 是 $\sigma$有限测度，且

$$\nu \ll  \mu, \quad  \mu \ll  \lambda$$

**(a)** 若 $g \in L^1(\nu)$，则 $g \frac{d\nu}{d\mu} \in L^1(\mu)$，且

$$\int g d\nu = \int g \frac{d\nu}{d\mu} d\mu$$

**(b)** 此时 $\nu \ll  \lambda$，且**链式法则**成立：

$$\frac{d\nu}{d\lambda} = \frac{d\nu}{d\mu} \cdot \frac{d\mu}{d\lambda}\quad  (\lambda-\text{a.e.})$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.rn-chain-rule.2.md](./prop.rn-chain-rule.2.md)

refs: Folland, Real Analysis, Theorem 3.9

> 说明见 `notes/prop.rn-chain-rule.md`

引用：`prop.rn-chain-rule`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
