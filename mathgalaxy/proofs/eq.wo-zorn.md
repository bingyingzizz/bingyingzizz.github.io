# 良序定理 $\iff$ 佐恩引理
`eq.wo-zorn` · 等价 · strong 边 · 根 `../`

`thm.wellordering` 良序定理 → `lem.zorn` 佐恩引理

**良序定理 ⇒ 佐恩引理**

设 $(P, \preceq )$ 是非空偏序集，且 $P$ 的每个链都有上界。由良序定理，取 $P$ 上的一个良序 $\le$（与 $\preceq$ 无关）。

用超限递归沿 $\le$ 构造 $P$ 的一个 $\preceq$链 $C$：

- 记 $U(C) = \{ u \in P : u$ 是 $C$ 的 $\preceq$上界 }。
- 若 U(C) 中存在元素有 $\preceq$严格上界，就取其中 $\le$最小的那个 $v$，令 $C \leftarrow C \cup \{v\}$；
- 否则停止。

**为什么必停**：每步都往 $C$ 里加入一个不属于 $C$ 的元素，所以若在任意序数处都不停，就会得到从「全体序数」到 $P$ 的单射。由替换公理模式，全体序数会是一个集合的像，即序数全体构成集合——这与 Burali-Forti 悖论矛盾。故递归在某个序数 $\beta$ 处停止。

**停止时 $C$ 有上界**：$C$ 是 $\preceq$链，由题设 $U(C) \ne \emptyset$，取 $u \in U(C)$。

> 续见 proofs/eq.wo-zorn.2.md
