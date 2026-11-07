# 有理标准形　`thm.rational-canonical-form`　·　说明
根 `../`

**引理 2（结构定理）**：设 $M$ 是有限生成 $R$-模。取生成元 $x_{1}, \ldots, x_{n}$，得满射 $R^{n} \to M$，其核由有限多个列向量 $a_{1}, \ldots, a_{m} \in R^{n}$ 生成（$K[x]$ 是 PID 故为 Noether 环，PID 上自由模的子模有限生成 —— 标准事实，本图未单列节点），即 $M \cong \operatorname{coker}(A)$，$A = (a_{1} \cdots a_{m})$。对 $A$ 取 Smith 标准形：存在可逆矩阵 $P, Q$ 使 $PAQ = \operatorname{diag}(d_{1}, \ldots, d_{r}, 0)$。可逆矩阵只是换基，故 $\operatorname{coker}(A) \cong \operatorname{coker}(PAQ) \cong R^{n-r} \oplus R/(d_{1}) \oplus \cdots \oplus R/(d_{r})$：第 $i$ 个坐标方向被 $d_{i} e_{i}$ 生成，$i > r$ 的方向不被任何关系碰到。$\square$

> 续见 notes/thm.rational-canonical-form.5.md
