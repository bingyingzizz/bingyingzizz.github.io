# 离散对数　`def.discrete-log`
以原根为底的离散对数
layer 13 · 定义 · 二次剩余与原根 · 数论
[在星图里打开](../#n=def.discrete-log)　·　[节点索引](../index.md)

设 $g$ 是模 $n$ 的原根，$\gcd(a, n) = 1$。把 $a$ 写成

$$a \equiv g^{k} \pmod n, \qquad 0 \le k < \varphi(n) ,$$

这个唯一的 $k$ 叫 $a$ 的**离散对数**，记 $k = \log_{g} a$。

## 为什么成立（入边，证明在 proofs/）
- [`def.primitive-root`](../nodes/def.primitive-root.md) 原根：用到了定义 原根　[proofs/e158.definition.md](../proofs/e158.definition.md)
- [`def.gcd`](../nodes/def.gcd.md) 最大公因数：用到了定义 最大公因数　[proofs/dep.dlog-gcd.md](../proofs/dep.dlog-gcd.md)

- …另有入边，续页见 [nodes/def.discrete-log.2.md](./def.discrete-log.2.md)

refs: 华罗庚《数论导引》第五章；Apostol, Ch. 10

> 说明见 `notes/def.discrete-log.md`

引用：`def.discrete-log`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
