# 凸函数　`def.convex-function`
凸函数与 Jensen 不等式（Convex Function）
layer 14 · 定义 · 微分中值定理与 Taylor · 分析学+序理论
[在星图里打开](../#n=def.convex-function)　·　[节点索引](../index.md)

设 $I$ 是区间，$f : I \to \mathbb{R}$。称 $f$ **凸**，当且仅当对一切 $x, y \in I$ 与一切 $t \in [0, 1]$，

$$f\bigl( (1 - t) x + t y \bigr) \le (1 - t) f(x) + t f(y)$$

即图像总在弦的**下方**。把 $\le$ 换成 $\ge$ 得**凹函数**（concave）。

由此归纳得到 **Jensen 不等式**：若 $\lambda_i \ge 0$、$\sum_i \lambda_i = 1$，则
> 陈述续见 [nodes/def.convex-function.2.md](./def.convex-function.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.convex-function.3.md](./def.convex-function.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 5；Rockafellar, Convex Analysis

> 说明见 `notes/def.convex-function.md`

引用：`def.convex-function`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
