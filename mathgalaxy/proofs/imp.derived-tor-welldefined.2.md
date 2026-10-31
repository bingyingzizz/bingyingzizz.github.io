# 消解的同伦唯一性保证挠积与消解的选取无关
`imp.derived-tor-welldefined` · 推出 · strong 边 · 根 `../`

`prop.resolution-homotopy` 消解的同伦唯一性 → `def.tor` 挠积

即 $P_{\bullet}\otimes N$ 与 $Q_{\bullet}\otimes N$ 在同伦范畴里同构。同伦等价诱导同调的同构，故对每个 $n$

$$H_{n}\bigl(P_{\bullet}\otimes_{R}N\bigr) \cong H_{n}\bigl(Q_{\bullet}\otimes_{R}N\bigr).$$

这正是说 $\operatorname{Tor}^{R}_{n}(M,N) := H_{n}(P_{\bullet}\otimes_{R}N)$ 与投射消解的选取无关（同一论断对 $N$ 一侧由内射消解的对称版本给出）。$\blacksquare$

> 所以定义里那句「取**一条**投射消解」是合法的 —— 良定义性不是细节，而是「消解可以随便挑」的全部依据。
