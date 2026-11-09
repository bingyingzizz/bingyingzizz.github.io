# Milman–Pettis 定理　`thm.milman-pettis`　·　说明
根 `../`

⚠ **本节点仍标 skeleton**：唯一未证的外部定理是 Goldstine 定理（见最后一段）；下面给出「Goldstine 推出自反」的完整归约，因此缺口只剩 Goldstine 与弱*拓扑的基本语言，不再有其它黑箱。

**框架（弱*拓扑）**：在 $X^{**}$ 上取由半范数族 $\xi \mapsto |\langle \varphi, \xi \rangle|$（$\varphi \in X^*$）诱导的局部凸拓扑，称为弱*拓扑；网 $\xi_\alpha \to \xi$ 当且仅当对每个 $\varphi \in X^*$ 有 $\langle \varphi, \xi_\alpha \rangle \to \langle \varphi, \xi \rangle$。自然嵌入 $J_X : X \to X^{**}$ 满足 $\langle \varphi, J_X x \rangle = \varphi(x)$。

**Goldstine 定理（外部输入，本图无节点）**：$J_X(B_X)$ 在 $B_{X^{**}}$ 中弱*稠密。标准证明走 Hahn–Banach 分离（或用 Banach–Alaoglu 加 Krein–Milman）；本图既无 Hahn–Banach 节点，也无弱*拓扑/网收敛节点，故不在此展开。

> 续见 notes/thm.milman-pettis.2.md
