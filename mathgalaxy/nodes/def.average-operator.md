# 平均算子 Aᵣ　`def.average-operator`
平均算子（Averaging Operator $A_{r} f$）
layer 21 · 定义 · 微分定理 · 实变函数+数学分析
[在星图里打开](../#n=def.average-operator)　·　[节点索引](../index.md)

设 $f \in L^1_{loc}$，$x \in \mathbb{R}^n$，$r > 0$。定义

$$A_r f(x) := \frac{1}{m(B(r, x))} \int_{B(r, x)} f(y) dy$$

即 $f$ 在以 $x$ 为心、$r$ 为半径的球上的**平均值**。

## 为什么成立（入边，证明在 proofs/）
- [`thm.lebesgue-differentiation`](../nodes/thm.lebesgue-differentiation.md) Lebesgue 微分定理：Lebesgue 微分定理给出平均算子 $A_{r}$ 的极限　[proofs/imp.derived-average-limit.md](../proofs/imp.derived-average-limit.md)

- …另有入边，续页见 [nodes/def.average-operator.2.md](./def.average-operator.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.average-operator.3.md](./def.average-operator.3.md)

refs: Folland, Real Analysis, §3.4

> 说明见 `notes/def.average-operator.md`

引用：`def.average-operator`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
