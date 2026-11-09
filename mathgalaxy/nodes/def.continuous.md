# 连续（ε-δ 判据）　`def.continuous`
连续：$\varepsilon$-$\delta$ 判据
layer 16 · 定理 · 实数与极限 · 数学分析+拓扑学
[在星图里打开](../#n=def.continuous)　·　[节点索引](../index.md)

**定理（$\varepsilon$-$\delta$ 判据）**：下面这个条件不是定义，而是度量连续性的判据；定义见 `def.metric-continuity`，$\mathbb{R}$ 上的度量见 `def.real-metric-space`。
$f : \mathbb{R} \to \mathbb{R}$ 在 $x_0$ **连续**，当且仅当

$$\forall \varepsilon > 0, \exists \delta > 0 : |x - x_0| < \delta \implies |f(x) - f(x_0)| < \varepsilon$$

等价说法：$\lim_{x \to x_0} f(x) = f(x_0)$（极限存在且等于函数值）。

$f$ **连续**（在 $\mathbb{R}$ 上连续）当且仅当它在每一点连续。
> 陈述续见 [nodes/def.continuous.2.md](./def.continuous.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.continuous.3.md](./def.continuous.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.continuous.5.md](./def.continuous.5.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 4

> 说明见 `notes/def.continuous.md`

引用：`def.continuous`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
