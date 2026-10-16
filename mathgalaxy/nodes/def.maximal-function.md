# 极大函数　`def.maximal-function`
Hardy–Littlewood 极大函数 Hf
layer 22 · 定义 · 微分定理 · 分析学
[在星图里打开](../#n=def.maximal-function)　·　[节点索引](../index.md)

设 $f \in L^1_{loc}$。定义

$$Hf(x) := \sup_{r > 0} \frac{1}{m(B(r, x))} \int_{B(r, x)} |f(y)| dy = \sup_{r > 0} A_r |f|(x)$$

称为 $f$ 的 **Hardy–Littlewood 极大函数**。

## 为什么成立（入边，证明在 proofs/）
- [`def.average-operator`](../nodes/def.average-operator.md) 平均算子 Aᵣ：用到了定义 平均算子 Aᵣ　[proofs/def-link.average-maximal.md](../proofs/def-link.average-maximal.md)

- …另有入边，续页见 [nodes/def.maximal-function.2.md](./def.maximal-function.2.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.maximal-theorem`](../nodes/thm.maximal-theorem.md) 极大定理

- …另有出边，续页见 [nodes/def.maximal-function.3.md](./def.maximal-function.3.md)

refs: Folland, Real Analysis, §3.4

> 说明见 `notes/def.maximal-function.md`

引用：`def.maximal-function`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
