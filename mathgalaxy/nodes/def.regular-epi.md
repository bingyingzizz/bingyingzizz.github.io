# 正则满态射　`def.regular-epi`
正则满态射
layer 14 · 定义 · 层与拓扑 · 范畴论
[在星图里打开](../#n=def.regular-epi)　·　[节点索引](../index.md)

态射 $f : X \to Y$ 叫**正则满态射**，如果它是某个平行对的**余等化子**：存在 $u, v : W \rightrightarrows X$ 使 $f = \operatorname{coker}(u, v)$。

## 它能推出什么 / 谁在用它
- ⇒ [`prop.pretopos-factorization`](../nodes/prop.pretopos-factorization.md) 满-单分解
- 被 [`def.pretopos`](../nodes/def.pretopos.md) 预拓扑斯 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.regular-epi.2.md](./def.regular-epi.2.md)

refs: Le Stum, An introduction to condensed mathematics, §3.1–3.2

## 说明
在 $\mathbf{Set}$ 里**每个满射都是正则的**：取 $W = X \times_{Y} X$ 与两个投影，它们的余等化子正是 $f$。在一般范畴里不然 —— 「满」（右可消）比「正则满」弱得多，差的那部分正是「$Y$ 是不是真的由 $X$ 商出来的」。

引用：`def.regular-epi`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
