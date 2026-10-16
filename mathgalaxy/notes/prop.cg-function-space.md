# 函数空间弱 Hausdorff　`prop.cg-function-space`　·　说明
根 `../`

**证明。** 取紧 Hausdorff 的 $g : T \to kC(X, Y)$，要证 $g(T)$ 在 $kC(X,Y)$ 中闭。$kC(X,Y)$ 紧生成，故只需证：对**每个**紧 Hausdorff 的 $T'$ 与连续 $h : T'\to kC(X,Y)$，
$$A := \{\, t'\in T' : h(t')\in g(T) \,\}$$
在 $T'$ 中闭。
- 由指数律（$T, T'$ 紧 Hausdorff $\implies$ 局部紧 Hausdorff），$g, h$ 分别对应连续的 $\hat g : T\times X\to Y$、$\hat h : T'\times X\to Y$；
- **$X$ 紧生成**，所以「两个映射 $X\to Y$ 相等」只需沿所有紧 Hausdorff 的 $a : S\to X$ 验证。于是
$$A = \operatorname{pr}_{T'}\Bigl(\bigcap_{(S,a)} B_{S,a}\Bigr), \qquad B_{S,a} := \{\,(t',t)\in T'\times T : \hat h\bigl(t',a(s)\bigr) = \hat g\bigl(t,a(s)\bigr)\ \ \forall s\in S\,\};$$
- 每个 $B_{S,a} = \operatorname{pr}_{T'\times T}\bigl(\theta_{S,a}^{-1}(\Delta_{Y})\bigr)$，其中 $\theta_{S,a} : T'\times T\times S \to Y\times Y$，$(t',t,s)\mapsto\bigl(\hat h(t',a(s)),\ \hat g(t,a(s))\bigr)$ 连续。$T'\time

> 续见 notes/prop.cg-function-space.2.md
