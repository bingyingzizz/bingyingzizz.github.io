# 素数计数函数　`def.prime-counting`
$\pi(x)$、$\theta(x)$ 与 $\psi(x)$
layer 12 · 定义 · 数论函数与素数分布 · 数论
[在星图里打开](../#n=def.prime-counting)　·　[节点索引](../index.md)

对 $x > 0$ 定义

$$\pi(x) := \sum_{p \le x} 1, \qquad \theta(x) := \sum_{p \le x} \log p, \qquad \psi(x) := \sum_{p^{k} \le x} \log p .$$

$\pi$ 数素数个数，$\theta$ 按对数加权，$\psi$（**Чебышёв 函数**）把所有素数幂一起数。

## 为什么成立（入边，证明在 proofs/）
- [`def.prime`](../nodes/def.prime.md) 素数：用到了定义 素数　[proofs/e141:definition.md](../proofs/e141:definition.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.prime-counting.2.md](./def.prime-counting.2.md)

refs: 华罗庚《数论导引》第七、九章；Apostol, Ch. 4

> 说明见 `notes/def.prime-counting.md`

引用：`def.prime-counting`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
