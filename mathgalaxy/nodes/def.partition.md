# 分割　`def.partition`
分割与加细（Partition）
layer 14 · 定义 · Riemann 积分 · 分析学
[在星图里打开](../#n=def.partition)　·　[节点索引](../index.md)

闭区间 $[a, b]$ 的一个**分割**是一组有限点

$$P = \{ a = x_0 < x_1 < \cdots < x_n = b \}$$

第 $i$ 个小区间记 $I_i := [x_{i-1}, x_i]$，长度记 $\Delta x_i := x_i - x_{i-1}$。分割的**模**是

$$\|P\| := \max_{1 \le i \le n} \Delta x_i$$

若 $P \subseteq P'$（把 $P$ 的点全放进 $P'$，可能还添了新点），称 $P'$ 是 $P$ 的**加细**。任意两个分割 $P, Q$ 都有公共加细 $P \cup Q$。

## 它能推出什么 / 谁在用它
- 被 [`def.riemann-sum`](../nodes/def.riemann-sum.md) Riemann 和 用

- …另有出边，续页见 [nodes/def.partition.3.md](./def.partition.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.partition.2.md](./def.partition.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 6；Spivak, Calculus, Ch. 13

> 说明见 `notes/def.partition.md`

引用：`def.partition`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
