# 同调的短正合列　`prop.cohomology-exact-sequence`
把同调夹在两个余核 / 核之间
layer 13 · 命题 · 同调代数 · 范畴论

设 $K$ 是复形。则对每个 $k$ 有正合列

$$0 \longrightarrow H^{k}(K) \longrightarrow \operatorname{coker} d^{k-1} \longrightarrow \ker d^{k+1} \longrightarrow H^{k+1}(K) \longrightarrow 0$$

## 为什么成立（入边，证明在 proofs/）
- `def.equalizer` 等化子 / 余等化子：用到了定义 等化子 / 余等化子　proofs/def-dep.equalizer-cohomology-sequence.md

## 说明
也就是 $0 \to Z^{k}/B^{k} \to K^{k}/B^{k} \to Z^{k+1} \to Z^{k+1}/B^{k+1} \to 0$。这条把「同调」拆成两段：**先取余核去掉上一步的像，再取核挑出闭链，最后取商** —— 于是复形里的信息被一层层剥出来。
