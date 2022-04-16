<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Invoice extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'invoice:genrate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'invoice Gerate for All';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //
        echo("cron job is working");
    }
}
