# 函数极限　`def.function-limit`
函数极限 $\lim_{x \to x_0} f(x) = L$
layer 14 · 定义 · 实数与极限 · 数学分析
[在星图里打开](../#n=def.function-limit)　·　[节点索引](../index.md)

设 $f$ 在 $x_0$ 的某个**去心邻域**上有定义，$L \in \mathbb{R}$。称 $x \to x_0$ 时 $f(x)$ 趋于 $L$（记 $\lim_{x \to x_0} f(x) = L$），当且仅当

$$\forall \varepsilon > 0,\ \exists \delta > 0 :\ 0 < |x - x_0| < \delta \implies |f(x) - L| < \varepsilon$$
> 陈述续见 [nodes/def.function-limit.2.md](./def.function-limit.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.abs`](../nodes/def.abs.md) 绝对值 |x|：用到了定义 绝对值 |x|　[proofs/def-link.abs-fn-limit.md](../proofs/def-link.abs-fn-limit.md)

- …另有入边，续页见 [nodes/def.function-limit.3.md](./def.function-limit.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.function-limit.4.md](./def.function-limit.4.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 4；Tao, Analysis I, Ch. 9

> 说明见 `notes/def.function-limit.md`

引用：`def.function-limit`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
