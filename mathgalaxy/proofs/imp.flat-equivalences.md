# 右正合 + 平坦的定义 $\implies$ 五条等价刻画
`imp.flat-equivalences` · 推出 · strong 边 · 根 `../`

`prop.tensor-right-exact` 张量函子右正合 + `def.flat-module` 平坦模 → `prop.flat-equivalences` 平坦的等价说法

**1 与 2**：右正合已由前一条给出，所以「正合」只差左端那一个单射 ✓。

**2 蕴含 3**：取 $M$ 的投射消解 $P_{\bullet} \to M$。$\operatorname{Tor}_{1}^{R}(M, N) = H_{1}(P_{\bullet} \otimes N)$。若 $N$ 平坦，$P_{\bullet} \otimes N$ 仍是正合列（每一项都自由、逐项张量后短正合列仍正合），故 $H_{1} = 0$ ✓。

**3 蕴含 4**：由 $0 \to I \to R \to R/I \to 0$ 与 $\operatorname{Tor}_{1}^{R}(R, N) = 0$（$R$ 自由）得长正合列
$$0 \longrightarrow \operatorname{Tor}_{1}^{R}(R/I, N) \longrightarrow I \otimes N \longrightarrow N \longrightarrow \cdots$$
故 $\operatorname{Tor}_{1}^{R}(R/I, N) = 0$ 推出 $I \otimes N \to N$ 单 ✓。

> 续见 proofs/imp.flat-equivalences.2.md
