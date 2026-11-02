# 内射复形：零调、拟同构与同伦　`prop.injective-complex-homotopy`　·　说明
根 `../`

$I^{n}$ **内射**，所以这条列**分裂**：取 $q_{n} : I^{n} \to Z^{n}$ 使 $q_{n}j_{n} = 1$、取 $s_{n} : Z^{n+1} \to I^{n}$ 使 $p_{n}s_{n} = 1$，于是
$$1_{I^{n}} = j_{n}q_{n} + s_{n}p_{n} \qquad \text{（分裂短正合列的标准恒等式）}\;\checkmark$$
令 $s^{n} := s_{n-1}\circ q_{n} : I^{n} \to I^{n-1}$。注意 $d^{n} = j_{n+1}p_{n}$ 且 $d^{n-1} = j_{n}p_{n-1}$，于是
$$d^{n-1}s^{n} + s^{n+1}d^{n} = j_{n}p_{n-1}s_{n-1}q_{n} + s_{n}q_{n+1}j_{n+1}p_{n} = j_{n}q_{n} + s_{n}p_{n} = 1_{I^{n}} \;\checkmark$$
（用了 $p_{n-1}s_{n-1} = 1$、$q_{n+1}j_{n+1} = 1$。）这正是「$1 \sim 0$」要求的恒等式 ✓。
**2.** $(\Longleftarrow)$ 同伦等价显然给出拟同构（同伦的映射在同调上相等，逆映射的存在性使 $H^{n}(f)$ 可逆）✓。
$(\Longrightarrow)$ 设 $f : I^{\bullet} \to J^{\bullet}$ 是拟同构。

> 续见 notes/prop.injective-complex-homotopy.3.md
