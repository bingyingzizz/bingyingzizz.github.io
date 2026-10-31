# 依测度 Cauchy　`def.cauchy-in-measure`
依测度 Cauchy 序列
layer 15 · 定义 · 可测函数与收敛 · 实变函数+数学分析
[在星图里打开](../#n=def.cauchy-in-measure)　·　[节点索引](../index.md)

可测函数列 $\{f_n\}$ 是**依测度 Cauchy 的**，当且仅当

$$\forall\varepsilon > 0, \mu(\{x : |f_n(x) - f_m(x)| \ge \varepsilon\}) \to 0\quad  (m, n \to \infty)$$

即：在测度意义下，下标够大之后各项彼此越来越近。

## 为什么成立（入边，证明在 proofs/）
- [`def.measurable-function`](../nodes/def.measurable-function.md) 可测函数：用到了定义 可测函数　[proofs/def-dep.measurable-fn-cauchy-in-measure.md](../proofs/def-dep.measurable-fn-cauchy-in-measure.md)

- …另有入边，续页见 [nodes/def.cauchy-in-measure.2.md](./def.cauchy-in-measure.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.cauchy-in-measure.3.md](./def.cauchy-in-measure.3.md)

refs: Folland, Real Analysis, §2.4

> 说明见 `notes/def.cauchy-in-measure.md`

引用：`def.cauchy-in-measure`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
