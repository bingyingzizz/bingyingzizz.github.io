# 切映射　`def.differential-map`　·　续页（第 2 页）
[在星图里打开](../#n=def.differential-map)　·　第 1 页 [nodes/def.differential-map.md](./def.differential-map.md)

## 陈述（续）
即「过 $p$ 的曲线 $\gamma$」所在的类送到「过 $F(p)$ 的曲线 $F \circ \gamma$」所在的类。$\mathrm{d}F_{p}$ 叫 $F$ 在 $p$ 的**切映射**（也叫**微分**、微分映射）。

在卡 $(U,\varphi)$（$N$ 的）与 $(V,\psi)$（$M$ 的）下，$\mathrm{d}F_{p}$ 的矩阵就是 $F$ 的局部表示的 Jacobi 矩阵：
$$\Bigl[\mathrm{d}F_{p}\Bigr]_{\varphi,\psi} = \Bigl(\frac{\partial (\psi \circ F \circ \varphi^{-1})^{i}}{\partial x^{j}}(x)\Bigr)_{i,j},\qquad x = \varphi(p).$$

$\mathrm{d}F_{p}$ 是线性映射，并满足**链式法则**
$$\mathrm{d}(G \circ F)_{p} = \mathrm{d}G_{F(p)} \circ \mathrm{d}F_{p},\qquad \mathrm{d}(\operatorname{id}_{N})_{p} = \operatorname{id}_{T_{p}N}.$$

让 $p$ 跑遍 $N$ 得到一个切丛之间的映射 $\mathrm{d}F : TN \to TM$，$v \mapsto \mathrm{d}F_{\pi(v)}(v)$。

> 续见 [nodes/def.differential-map.3.md](./def.differential-map.3.md)
