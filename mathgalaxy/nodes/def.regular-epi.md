# 正则满态射　`def.regular-epi`
正则满态射（Regular Epimorphism）
layer 14 · 定义 · 层与拓扑 · 范畴论

态射 $f : X \to Y$ 叫**正则满态射**，如果它是某个平行对的**余等化子**：存在 $u, v : W \rightrightarrows X$ 使 $f = \operatorname{coker}(u, v)$。

## 为什么成立（入边，证明在 proofs/）
- `def.mono` 单态射 / 满态射：用到了定义 单态射 / 满态射　proofs/def-dep.mono-regular-epi.md
- `def.equalizer` 等化子 / 余等化子：用到了定义 等化子 / 余等化子　proofs/def-dep.equalizer-regular-epi.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.pretopos-factorization` 满-单分解
- 被 `def.pretopos` 预拓扑斯 用

## 说明
在 $\mathbf{Set}$ 里**每个满射都是正则的**：取 $W = X \times_{Y} X$ 与两个投影，它们的余等化子正是 $f$。在一般范畴里不然 —— 「满」（右可消）比「正则满」弱得多，差的那部分正是「$Y$ 是不是真的由 $X$ 商出来的」。
