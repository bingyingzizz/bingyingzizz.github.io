# 平坦模的结构定理　`thm.lazard`　·　说明
根 `../`

其次，从 $\varinjlim_{\mathcal C}R^n$ 到 $F$ 有自然映射 $\Phi$（由各 $\chi$ 给出，态射的交换三角保证相容）。(i) 满：任意 $x\in F$ 来自对象 $(R,\chi)$，$\chi(1)=x$。(ii) 单：设 $\xi\in\varinjlim R^n$ 满足 $\Phi(\xi)=0$。$\xi$ 来自某 $(R^m,\chi)$ 与 $x\in R^m$，于是 $\chi(x)=0$。令 $P=R^m/Rx$（右模商去由 $x$ 生成的循环子模），$\pi:R^m\to P$；因 $\chi(x)=0$，$\chi$ 过 $P$：$\chi=f\pi$。$P$ 有限呈现（$R\to R^m\to P\to0$）。用引理 L 得 $P\xrightarrow{\psi'}R^k\xrightarrow{\chi'}F$，$f=\chi'\psi'$。令 $h=\psi'\pi:R^m\to R^k$。则 $\chi'h=\chi$，故 $h$ 是 $\mathcal C$ 中的态射；且 $h(x)=\psi'(\pi x)=0$。于是 $\xi$ 在余极限中为 $0$。

因此 $F\cong\varinjlim_{\mathcal C}R^n$，每个 $R^n$ 有限生成自由。∎

> 续见 notes/thm.lazard.9.md
