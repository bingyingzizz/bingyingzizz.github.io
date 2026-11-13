# 闭子代数是格　`lem.closed-subalgebra-lattice`
含单位的闭子代数是格
layer 13 · 引理 · C(K) 与 Stone–Weierstrass · 泛函分析
[在星图里打开](../#n=lem.closed-subalgebra-lattice)　·　[节点索引](../index.md)

设 $K$ 紧 Hausdorff，$A \subseteq C(K, \mathbb{R})$ 是**含单位**的**闭**子代数。则 $A$ 对 $\min, \max$ 封闭。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.stone-weierstrass`](../nodes/thm.stone-weierstrass.md) Stone–Weierstrass 定理

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/lem.closed-subalgebra-lattice.2.md](./lem.closed-subalgebra-lattice.2.md)

refs: Rudin, Functional Analysis · Stone–Weierstrass 定理

## 说明
**为什么只需证 $|f|\in A$**：$\max,\min$ 可由 $|\cdot|$ 与四则运算拼出；$|f|=\sqrt{f^{2}}$ 再用二项级数一致逼近。完整证明见边 `imp.subalgebra-lattice-proof`。

引用：`lem.closed-subalgebra-lattice`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
