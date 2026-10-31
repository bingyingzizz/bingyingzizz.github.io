# 最值定理　`thm.evt`
最值定理
layer 19 · 定理 · 连续与紧性 · 数学分析+拓扑学
[在星图里打开](../#n=thm.evt)　·　[节点索引](../index.md)

设 $X$ 是紧度量空间，$f : X \to \mathbb{R}$ 连续。则 $f$ **取到**最大值与最小值：存在 $x_{\min}, x_{\max} \in X$，使对一切 $x \in X$ 有

$$f(x_{\min}) \le f(x) \le f(x_{\max})$$

## 为什么成立（入边，证明在 proofs/）
- [`prop.continuous-bounded-on-compact`](../nodes/prop.continuous-bounded-on-compact.md) 紧集上连续 ⟹ 有界 + [`thm.real-ordered-field`](../nodes/thm.real-ordered-field.md) ℝ 是完备有序域：有界 + 确界原理 $\implies$ 取到最值　[proofs/imp.bounded-evt.md](../proofs/imp.bounded-evt.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.evt.2.md](./thm.evt.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 4

> 说明见 `notes/thm.evt.md`

引用：`thm.evt`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
