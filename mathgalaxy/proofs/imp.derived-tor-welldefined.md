# 消解的同伦唯一性保证挠积与消解的选取无关
`imp.derived-tor-welldefined` · 推出 · strong 边 · 根 `../`

`prop.resolution-homotopy` 消解的同伦唯一性 → `def.tor` 挠积

设 $P_{\bullet} \twoheadrightarrow M$ 与 $Q_{\bullet} \twoheadrightarrow M$ 是同一个模的两条投射消解。由「消解的同伦唯一性」存在链映射 $\varphi : P_{\bullet} \to Q_{\bullet}$、$\psi : Q_{\bullet} \to P_{\bullet}$，使

$$\psi\varphi \sim 1_{P_{\bullet}}, \qquad \varphi\psi \sim 1_{Q_{\bullet}}.$$

张量函数 $-\otimes_{R} N$ 是加法函子：它把 $h : P_{n} \to P_{n-1}$ 送到 $h\otimes 1_{N}$，而链同伦的等式 $\psi\varphi - 1 = \partial h + h\partial$ 张量之后仍然成立（$\partial$ 也是逐项张量得到的）。于是

$$(\psi\otimes 1)(\varphi\otimes 1) \sim 1_{P_{\bullet}\otimes N}, \qquad (\varphi\otimes 1)(\psi\otimes 1) \sim 1_{Q_{\bullet}\otimes N},$$

> 续见 proofs/imp.derived-tor-welldefined.2.md
