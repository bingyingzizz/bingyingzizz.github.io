# 离散对数　`def.discrete-log`
以原根为底的离散对数
layer 11 · 定义 · 二次剩余与原根 · 数论
[在星图里打开](../#n=def.discrete-log)　·　[节点索引](../index.md)

设 $g$ 是模 $n$ 的原根，$\gcd(a, n) = 1$。把 $a$ 写成

$$a \equiv g^{k} \pmod n, \qquad 0 \le k < \varphi(n) ,$$

这个唯一的 $k$ 叫 $a$ 的**离散对数**，记 $k = \log_{g} a$。

## 为什么成立（入边，证明在 proofs/）
- [`def.primitive-root`](../nodes/def.primitive-root.md) 原根：用到了定义 原根　[proofs/e157:definition.md](../proofs/e157:definition.md)
- [`thm.primitive-root-exists`](../nodes/thm.primitive-root-exists.md) 模素数有原根：用到了定义 模素数有原根　[proofs/e158:definition.md](../proofs/e158:definition.md)

refs: 华罗庚《数论导引》第五章；Apostol, Ch. 10

> 说明见 `notes/def.discrete-log.md`

引用：`def.discrete-log`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
