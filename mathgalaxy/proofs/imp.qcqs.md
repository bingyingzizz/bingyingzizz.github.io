# 拟紧拟分离层 $\iff$ 小对象
`imp.qcqs` · 推出 · strong 边 · 根 `../`

`def.quasi-compact` 拟紧对象 + `def.quasi-separated` 拟分离对象 + `def.precanonical-topology` 预标准拓扑 → `thm.pretopos-qcqs` 预拓扑斯由拓扑斯唯一确定

**函子性**：$X \mapsto h_{X}$ 是米田嵌入，全忠实。要证的是它的本质满性。

**（小对象 $\implies$ 拟紧且拟分离）** 设 $X \in \mathcal{C}$。任给覆盖 $(X_{i} \to X)_{i \in I}$，即 $\coprod_{i} X_{i} \to X$ 是满态射。由预标准拓扑的定义，覆盖只由**有限**族给出，所以 $X$ 拟紧（有限子覆盖就是自己）。

> 续见 proofs/imp.qcqs.2.md
