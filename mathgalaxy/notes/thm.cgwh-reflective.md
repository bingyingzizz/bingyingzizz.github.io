# CGWH 是 CG 的反射子范畴　`thm.cgwh-reflective`　·　说明
根 `../`

**为什么取「最小的闭等价关系」。** 要让商 $X/R$ 弱 Hausdorff，$R$ 得是 $k$-闭的（上一条）；而要商掉得尽量少、好让反射是「最经济」的改造，就取最小的那个闭等价关系。（$R \mapsto X/R$ 把关系越大商越小，方向别弄反。）

⭐ 这一条给出「怎么把一个空间修好」的完整链条：$X \rightsquigarrow kX$（先 $k$-化，变成 $\mathrm{CG}$）$\rightsquigarrow kX/R$（再商掉最小闭等价关系，变成 $\mathrm{CGWH}$）。两步都是**函子性**的，所以 $\mathrm{CGWH}$ 里的同构、极限、余极限都能从 $\mathbf{Top}$ 里搬过来。

⭐ 这就是为什么现代代数拓扑默认在 $\mathrm{CGWH}$ 里做事：$\mathrm{CGWH}$ 对**有限积**封闭、函数空间 $kC(X,Y)$ 还在里面、且是笛卡尔闭的 —— 而 $\mathbf{Top}$ 一个都不满足。
