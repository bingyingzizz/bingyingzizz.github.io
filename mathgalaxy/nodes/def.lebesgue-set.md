# Lebesgue 集　`def.lebesgue-set`
Lebesgue 集 $L_f$
layer 22 · 定义 · 微分定理 · 分析学
[在星图里打开](../#n=def.lebesgue-set)　·　[节点索引](../index.md)

设 $f \in L^1_{loc}$。定义

$$L_f := \{ x : \lim_{r\to0} \frac{1}{m(B(r, x))} \int_{B(r, x)} |f(y) - f(x)| dy = 0 \}$$

称为 $f$ 的 **Lebesgue 集**。

## 为什么成立（入边，证明在 proofs/）
- [`def.locally-integrable`](../nodes/def.locally-integrable.md) 局部可积：用到了定义 局部可积　[proofs/def-dep.locally-integrable-lebesgue-set.md](../proofs/def-dep.locally-integrable-lebesgue-set.md)

- …另有入边，续页见 [nodes/def.lebesgue-set.2.md](./def.lebesgue-set.2.md)

## 它能推出什么 / 谁在用它
- 被 [`thm.lebesgue-set-full`](../nodes/thm.lebesgue-set-full.md) Lebesgue 集几乎处处 用

- …另有出边，续页见 [nodes/def.lebesgue-set.3.md](./def.lebesgue-set.3.md)

refs: Folland, Real Analysis, §3.4

> 说明见 `notes/def.lebesgue-set.md`

引用：`def.lebesgue-set`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
