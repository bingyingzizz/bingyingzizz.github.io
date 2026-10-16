# 自伴性 + 紧性 $\implies$ 谱定理（实对称）
`imp.spectral-theorem` · 推出 · strong 边 · 根 `../`

`def.normal-operator` 正规算子 + `thm.diagonalizable` 可对角化判据 + `thm.evt` 最值定理 + `def.orthogonal-complement` 正交补 → `thm.spectral-theorem` 谱定理（实对称）

. **特征子空间的不变性**：$U := E_\lambda$ 是 $T$-不变的；由**自伴性**，$U^{\perp}$ 也是 $T$-不变的：若 $w \perp U$，则对 $u \in U$，$\langle u, Tw\rangle = \langle Tu, w\rangle = \langle \lambda u, w\rangle = \lambda\langle u, w\rangle = 0$，即 $Tw \perp U$。
3. **归纳**：$T|_{U^{\perp}}$ 仍自伴，对 $\dim U^{\perp} < \dim V$ 用归纳假设，得 $U^{\perp} = E_{\lambda_2}\oplus\cdots$（两两正交）。于是 $V = E_{\lambda} \oplus U^{\perp}$ 是所有特征子空间的正交直和。
4. 

> 续见 proofs/imp.spectral-theorem.4.md
