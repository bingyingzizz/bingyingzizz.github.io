# 开映射定理（Banach 版）　`thm.open-mapping-banach`
开映射定理：满射有界算子把开集映成开集
layer 28 · 定理 · Baire 纲与三大定理 · 泛函分析
[在星图里打开](../#n=thm.open-mapping-banach)　·　[节点索引](../index.md)

设 $E, F$ 是 Banach 空间，$u \in B(E, F)$ **满射**。则 $u$ 是开映射：开集的像是开集。
由 $u$ 线性，这等价于「$0$ 的某邻域的像是 $0$ 的邻域」，即存在 $r > 0$ 使
$$u(B_E) \supseteq r\, B_F ,$$
其中 $B_E, B_F$ 是闭单位球。更弱的假设也够：$u(E)$ 在 $F$ 中第二纲即可（$F$ 完备时满射自动满足，故通常只写满射）。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.bounded-inverse`](../nodes/thm.bounded-inverse.md) 逆算子定理

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.open-mapping-banach.2.md](./thm.open-mapping-banach.2.md)

refs: Rudin, Functional Analysis, 2.11

> 说明见 `notes/thm.open-mapping-banach.md`

引用：`thm.open-mapping-banach`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
