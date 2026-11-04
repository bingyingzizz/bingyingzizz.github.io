# 单位根　`def.roots-of-unity`
$n$ 次单位根与分圆多项式 $\Phi_{n}$
layer 20 · 定义 · Galois 理论 · 抽象代数+复变函数
[在星图里打开](../#n=def.roots-of-unity)　·　[节点索引](../index.md)

设 $n \ge 1$。多项式 $x^{n} - 1$ 在 $\mathbb{C}$ 中的根叫 **$n$ 次单位根**：

$\mu_{n} := \{\, \zeta \in \mathbb{C} : \zeta^{n} = 1 \,\} = \{\, e^{2\pi i k/n} : k = 0, 1, \ldots, n-1 \,\}.$

它在乘法下构成一个 $n$ 阶**循环群**。其中**本原**的那些（阶恰为 $n$）有 $\varphi(n)$ 个，以它们为根的首一多项式

$\Phi_{n}(x) := \prod_{\zeta \text{ 本原}} (x - \zeta)$
> 陈述续见 [nodes/def.roots-of-unity.2.md](./def.roots-of-unity.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.roots-of-unity.3.md](./def.roots-of-unity.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.roots-of-unity.4.md](./def.roots-of-unity.4.md)

refs: Lang, Algebra, Ch. VI §3；Stewart, Galois Theory, Ch. 13

> 说明见 `notes/def.roots-of-unity.md`

引用：`def.roots-of-unity`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
