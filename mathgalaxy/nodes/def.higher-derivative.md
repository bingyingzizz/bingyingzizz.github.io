# 高阶导数与 C^k　`def.higher-derivative`
高阶导数与 $C^{k}$ 类
layer 16 · 定义 · 微分中值定理与 Taylor · 数学分析
[在星图里打开](../#n=def.higher-derivative)　·　[节点索引](../index.md)

若 $f'$ 在 $x_0$ 处可导，记

$$f''(x_0) := (f')'(x_0), \qquad f^{(n+1)}(x_0) := \bigl( f^{(n)} \bigr)'(x_0)$$

称 $f^{(n)}$ 为 $f$ 的 **$n$ 阶导数**。约定 $f^{(0)} := f$。

**连续可导类**：$f \in C^{0}(I)$ 表示 $f$ 在 $I$ 上连续；递归地，$f \in C^{k}(I)$ 表示 $f$ 可导且 $f' \in C^{k-1}(I)$；$f \in C^{\infty}(I)$ 表示对一切 $k$ 都有 $f \in C^{k}(I)$（称光滑）。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.higher-derivative.2.md](./def.higher-derivative.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 5

> 说明见 `notes/def.higher-derivative.md`

引用：`def.higher-derivative`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
