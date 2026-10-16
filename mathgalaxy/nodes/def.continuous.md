# 连续　`def.continuous`
连续（Continuity）
layer 14 · 定义 · 实数与极限 · 分析学+拓扑学
[在星图里打开](../#n=def.continuous)　·　[节点索引](../index.md)

$f : \mathbb{R} \to \mathbb{R}$ 在 $x_0$ **连续**，当且仅当

$$\forall \varepsilon > 0, \exists \delta > 0 : |x - x_0| < \delta \implies |f(x) - f(x_0)| < \varepsilon$$

等价说法：$\lim_{x \to x_0} f(x) = f(x_0)$（极限存在且等于函数值）。

$f$ **连续**（在 $\mathbb{R}$ 上连续）当且仅当它在每一点连续。

**一致连续**是更强的要求：$\delta$ 只依赖 $\varepsilon$，不依赖 $x_0$。

## 它能推出什么 / 谁在用它
- 被 [`def.derivative`](../nodes/def.derivative.md) 导数 用

- …另有出边，续页见 [nodes/def.continuous.3.md](./def.continuous.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.continuous.2.md](./def.continuous.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 4

> 说明见 `notes/def.continuous.md`

引用：`def.continuous`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
