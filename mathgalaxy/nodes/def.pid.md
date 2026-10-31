# 主理想整环　`def.pid`
主理想整环（PID）：每个理想都由一个元素生成
layer 10 · 定义 · 整环与分解 · 抽象代数
[在星图里打开](../#n=def.pid)　·　[节点索引](../index.md)

整环 $A$ 叫**主理想整环**（PID），若每个理想都是主理想：对任意理想 $I$ 存在 $a$ 使 $I = (a) = aA$。

## 为什么成立（入边，证明在 proofs/）
- [`def.euclidean-domain`](../nodes/def.euclidean-domain.md) Euclid 整环：Euclid 整环 $\implies$ PID：取范数最小的元素生成理想　[proofs/imp.ring-euclid-pid.md](../proofs/imp.ring-euclid-pid.md)
- [`def.ideal`](../nodes/def.ideal.md) 理想：用到了定义 理想　[proofs/e129:definition.md](../proofs/e129:definition.md)

## 它能推出什么 / 谁在用它
- ⇒ [`def.ufd`](../nodes/def.ufd.md) 唯一分解整环

refs: Atiyah–Macdonald, Ch. 1

> 说明见 `notes/def.pid.md`

引用：`def.pid`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
